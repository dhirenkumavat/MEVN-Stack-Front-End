import { Component, OnInit } from '@angular/core';
import { Listing} from  '../model/listing';
import { ListingService } from '../service/listing.service';
import { Observable, observable } from 'rxjs'
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-listing-detail',
  templateUrl: './listing-detail.component.html',
  styleUrls: ['./listing-detail.component.css']
})
export class ListingDetailComponent implements OnInit {
  id: string;

  listing: Listing;

  listingSub$: Subscription;

  constructor(private listingservice:ListingService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.listingSub$ = this.listingservice
      .getListing(this.id)
      .subscribe(listing => {
        this.listing = listing;
      });
  }
  ngOnDestroy(): void {
    this.listingSub$.unsubscribe();
  }
}
