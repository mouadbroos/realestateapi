import { Injectable, HttpService } from '@nestjs/common';
import { Observable, pipe } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import * as Realtor from './realtorResponse';
import * as QueryString from 'querystring';
import { ListingsRequest } from 'src/listings/listingsRequest';

@Injectable()
export class RealtorRepository {
    private form = {CultureId: 1, ApplicationId: 1, PropertySearchTypeId: 1};
    private API_URL = 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post';

    constructor(private readonly httpService: HttpService) { }

    getRealtorListings(req: ListingsRequest): Observable<Realtor.Response> {
        const kmToDeg = 1 / 110;

        const latitude = 45.5098388; // req.latitude ? req.latitude : 45.5098388;
        const longitude = -73.674768; // req.longitude ? req.longitude : -73.674768;
        const radius = req && req.radius ? req.radius : 10;
        const recordCount = req && req.recordcount && req.recordcount < 200 ? req.recordcount  : 200;
        const minprice = req && req.minprice ? req.minprice  : 0;
        const maxprice = req && req.maxprice ? req.maxprice  : 10000000;

        Object.assign(this.form, {
            LongitudeMax: longitude + (radius / 2 * kmToDeg),
            LongitudeMin: longitude - (radius / 2 * kmToDeg),
            LatitudeMax: latitude + (radius / 2 * kmToDeg),
            LatitudeMin: latitude  - (radius / 2 * kmToDeg),
            PriceMin: minprice,
            PriceMax: maxprice,
            RecordsPerPage: recordCount,
        });

        return this.httpService.post(this.API_URL, QueryString.stringify(this.form), {
            headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }}).pipe(
            tap( response => console.log(response.data.ErrorCode) ),
            map( respnose => respnose.data ),
        );
    }
}
