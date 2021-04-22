import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { RangeData } from './_models/range-data.model';
import { NumberData } from './_models/number-data.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = '/api';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /* private rangeDB: RangeData[] = [{id: 'ccaae9b5-7dfd-43be-9807-0a937beb0a6e', begin: '15000', end: '15099', originator: 'TISMI'},
  {id: '891f69fc-4bfe-48e7-a0ae-b3a8f0a21d59', begin: '10000', end: '10099', originator: 'TISMI'},
  {id: 'ca75ec88-1134-43ea-a5b0-33c8a95c333e', begin: '11000', end: '11099', originator: 'CGI'},
  {id: 'eac58571-d355-40d4-bac9-52dc25e6847b', begin: '12000', end: '12099', originator: 'CGI'},
  {id: 'd1a31618-98dd-4928-b035-161e2f296d55', begin: '13000', end: '13099', originator: 'TISMI'},
  {id: '00d41ac5-a568-445f-bd95-bc2d8a10c6d8', begin: '14000', end: '14099', originator: 'SYSTEMX'}]

  private numberDB: NumberData[] = [{number: '+4740661947', state: 'Avalable', originator: 'CGI', recipient: 'CGI', rangeid: ''},
  {number: '+4740661949', state: 'Avalable', originator: 'TISMI', recipient: 'TISMI', rangeid: ''},
  {number: '+4740661952', state: 'Avalable', originator: 'SYSTEMX', recipient: 'CGI', rangeid: ''},
  {number: '+4740661958', state: 'Avalable', originator: 'CGI', recipient: 'TISMI', rangeid: ''},
  {number: '+4740662033', state: 'Assigned', originator: 'SYSTEMX', recipient: 'SYSTEMX', rangeid: ''},
  {number: '+4740662034', state: 'Withdrawn', originator: 'TISMI', recipient: 'SYSTEMy', rangeid: ''}] */
 

  constructor(private http: HttpClient) { }

  public ranges: BehaviorSubject<RangeData[]> = new BehaviorSubject<RangeData[]>([]);

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructur
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getRanges(): Observable<RangeData[]> {
    return this.http.get<RangeData[]>(`${apiUrl}/range/`)
      .pipe(
        tap(cases => console.log('fetched ranges')),
        catchError(this.handleError('getRanges', []))
      );
  }


  createRange(range: RangeData): Observable<RangeData> {
    return this.http.post<RangeData>(apiUrl, range, httpOptions).pipe(
      tap((c: RangeData) => console.log(`added range w/ id=${c.id}`)),
      catchError(this.handleError<RangeData>('addRange'))
    );
  }

  deleteRange(id: string): Observable<RangeData> {
    const url = `${apiUrl}/${id}`;
 
    return this.http.delete<RangeData>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted range id=${id}`)),
      catchError(this.handleError<RangeData>('RangeData'))
    );
  }

  getNumbers(id: string): Observable<NumberData[]> {
    const url = `${apiUrl}/range/${id}`;
    return this.http.get<NumberData[]>(url)
      .pipe(
        tap(numbers => console.log('fetched numbers')),
        catchError(this.handleError('getNumbers', []))
      );
  }

  ///range/{rangeId}/number/{number}/assign
  assignNumber(number: NumberData): Observable<NumberData> {
    const url = `${apiUrl}/range/${number.rangeid}/number/${number.number}/assign`;

    return this.http.post<NumberData>(url, number, httpOptions).pipe(
      tap((c: NumberData) => console.log(`assigned number w/ id=${c.number}`)),
      catchError(this.handleError<NumberData>('addNumber'))
    );
  }

  ///range/{rangeId}/number/{number}/unassign
  unassignNumber(number: NumberData): Observable<NumberData> {
    const url = `${apiUrl}/range/${number.rangeid}/number/${number.number}/unassign`;

    return this.http.delete<NumberData>(url).pipe(
      tap((c: NumberData) => console.log(`unasaigned number w/ id=${c.number}`)),
      catchError(this.handleError<NumberData>('addNumber'))
    );
  }


  getMessages() {
    const url = `${apiUrl}/messages`;

    return this.http.get<NumberData[]>(url)
      .pipe(
        tap(numbers => console.log('fetched messages')),
        catchError(this.handleError('getMessages', []))
      );
  }
 /*  addNumber(test: NumberData): Observable<NumberData> {
    return this.http.post<NumberData>(apiUrl, test, httpOptions).pipe(
      tap((c: NumberData) => console.log(`added number w/ id=${c.test}`)),
      catchError(this.handleError<NumberData>('addNumber'))
    );
  } */

  /* deleteNumber(number: string): Observable<NumberData> {
    const url = `${apiUrl}/${number}`;
    
    return this.http.delete<NumberData>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted number id=${number}`)),
      catchError(this.handleError<NumberData>('NumberData'))
    );
  } */
}
