import {Injectable} from "@angular/core";
import {CredenciaisDto} from "../models/credenciais.dto";
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../config/api.config";
import {LocalUser} from "../models/local.user";
import {StorageService} from "./storage.service";

@Injectable()
export class AuthService {

  constructor(public http: HttpClient, public storage: StorageService) {
  }

  authenticate(credenciais: CredenciaisDto) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
      credenciais,
      {
        observe: 'response',
        responseType: 'text'
      });
  }

  successfulLogin(authorizationValue: string) {
    let tokenValue = authorizationValue.substring(7);
    let user : LocalUser = {
      token: tokenValue
    }
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }

}
