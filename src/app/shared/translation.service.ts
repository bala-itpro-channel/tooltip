import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import * as xml2js from 'xml2js';

@Injectable()
export class TranslationService {
    // if French
    private isFrench = false;
    private translations = '';

    constructor(private http: Http) {
        // if French
        if (localStorage.getItem('localeId') === 'fr') {
          this.isFrench = true;
          this.getTranslationsHttp();
        }
    }

    // if French
    getIsFrench(): boolean {
      return (localStorage.getItem('localeId') === 'fr');
    }

    public getTranslationsHttp() {
      this.http
        .get(`/assets/data/translation.${localStorage.getItem('localeId')}.xlf`)
        .catch(this.errorHandling)
        .subscribe(res => {
            this.translations = res.text();
        });
    }

    private errorHandling(obj: Response | any) {
      return Observable.throw(obj);
    }

    public getTranslation(transUnitId: string): string {
      if (!this.translations) {
        this.getTranslationsHttp();
      }
      let findResult = '';
      if (!this.translations) {
        return findResult;
      }

      try {
        xml2js.parseString(this.translations, function(err, result) {
          for (const entry of result.xliff.file[0].body[0]['trans-unit']) {
            if (entry['$']['id'] === transUnitId) {
              findResult = entry['target'][0];
              return findResult;
            }
          }
        });
      } catch (err) {
        return findResult;
      }

      return findResult;
    }
}
