import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private readonly apiUrl = 'https://localhost:44343/api/';

  getApiUrl(): string {
    return this.apiUrl;
  }
  constructor() { }
}
