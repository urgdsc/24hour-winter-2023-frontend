import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Auth, NewUser, User} from "../models/user";


@Injectable({providedIn: "root"})
export class AuthService {
  private _currentUser: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    let userString = localStorage.getItem("currentUser") || JSON.stringify(this.AnonymousUser());
    this._currentUser = new BehaviorSubject<User>(JSON.parse(userString));
    this.currentUser = this._currentUser.asObservable();
  }

  private AnonymousUser(): User {
    return {
      id: -1,
      first_name: "Anonymous",
      last_name: "Anonymous",
      email: "Anonymous",
      token: "Anonymous"
    };
  }

  public isAuthenticated(): boolean {
    return this.getCurrentUser().id !== -1;
  }

  public getCurrentUser(): User {
    return this._currentUser.value;
  }

  public token(): string {
    return this.getCurrentUser().token;
  }

  register(newUser: NewUser): Observable<Auth> {
    const response = this.http.post<Auth>(
      "https://api.24hour.yazdanra.com/auth/register",
      {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
      }
    );

    response.subscribe(authResponse => {
      this._currentUser = new BehaviorSubject<User>(authResponse.user);
      this.currentUser = this._currentUser.asObservable();

      localStorage.setItem("currentUser", JSON.stringify(authResponse.user));
    });

    return response;
  }

  login(email: string, password: string): Observable<Auth> {
    const response = this.http.post<Auth>(
      "https://api.24hour.yazdanra.com/auth/login",
      {email: email, password: password}
    );

    response.subscribe(authResponse => {
      this._currentUser = new BehaviorSubject<User>(authResponse.user);
      this.currentUser = this._currentUser.asObservable();

      localStorage.setItem("currentUser", JSON.stringify(authResponse.user));
    });

    return response;
  }

  logoutClient() {
    localStorage.removeItem("currentUser");
  }

  logout() {
    // Expire the token on the client
    this.logoutClient();

    // Expire the token on the server
    this.http.post(
      "https://api.24hour.yazdanra.com/auth/logout",
      {}
    ).subscribe(
      _ => {
        this._currentUser = new BehaviorSubject<User>(this.AnonymousUser());
        this.currentUser = this._currentUser.asObservable();
      }
    );
  }
}
