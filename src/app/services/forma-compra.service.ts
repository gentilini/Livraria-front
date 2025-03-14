import { inject, Injectable } from '@angular/core';
import { ConfigService } from './config.service';
import { FormaCompraModel } from '../models/forma-compra-model';

@Injectable({
  providedIn: 'root'
})
export class FormaCompraService {
  private configService:ConfigService = inject(ConfigService);
  private url = this.configService.getApiUrl();

  constructor() { }

  
  async getFormasDeCompra(): Promise<FormaCompraModel[]> {
    try {
      const response = await fetch(`${this.url}formacompra`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (Array.isArray(data)) {
        return data as FormaCompraModel[];
      } else {
        throw new Error('Invalid data format: "result" is not an array');
      }
    } catch (error) {
      console.error('Error fetching authors:', error);
      return []; 
    }
  }
}
