import { Injectable } from '@nestjs/common';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { RealtorRepository } from '../externals/realtor/realtor.repository';
import * as Realtor from 'src/externals/realtor/realtorResponse';
import { ListingsRequest } from 'src/listings/listingsRequest';

@Injectable()
export class ListingsService {

    constructor(private readonly realtorRepository: RealtorRepository) {}

    findAll(request: ListingsRequest): Observable<any> {
        return this.realtorRepository.getRealtorListings(request).pipe(
            map(response => 
                response.Results.map((result: Realtor.Result) => {
                    return {
                        Address : result.Property.Address.AddressText,
                        Bedrooms: result.Building.Bedrooms,
                        Price: result.Property.Price,
                    };
                }),
            ),
        );
        // .pipe(
        //     map(response  => [response.data[0]),
        // );
    }
}
