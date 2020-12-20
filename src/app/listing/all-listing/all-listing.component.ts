import { Component, OnInit } from '@angular/core';
import { Listing} from  '../model/listing';
import { ListingService } from '../service/listing.service';
import { Observable, observable } from 'rxjs'
@Component({
  selector: 'app-all-listing',
  templateUrl: './all-listing.component.html',
  styleUrls: ['./all-listing.component.css']
})
export class AllListingComponent implements OnInit {
  listings$ : Observable<Listing[]>;

  constructor(private listingservice:ListingService) { }

  ngOnInit(): void {
    this.listings$ = this.listingservice.getListings();

  }

}
