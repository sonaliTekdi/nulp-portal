
import { UserService } from '@sunbird/core';
import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Router } from '@angular/router';
import { EventListService } from 'ngtek-event-library';
import { EventFilterService, SbToastService } from 'ngtek-event-library';
import { from } from 'rxjs';
import { LayoutService, COLUMN_TYPE, ToasterService } from '@sunbird/shared';
import { takeUntil } from 'rxjs/operators';
import { createDirective } from '@angular/compiler/src/core';
import { Subject } from 'rxjs';
// import { SbToastService } from "../../services/iziToast/izitoast.service";
import * as mappingConfig from '../../config/nameToCodeMapping.json';
// import * as staticEventList from '../../../../../assets/api/eventlist.json'
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  yellow: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
};

@Component({
  selector: 'app-all-my-events',
  templateUrl: './all-my-events.component.html',
  styleUrls: ['./all-my-events.component.scss']
})
export class AllMyEventsComponent implements OnInit {

  eventList: any;

  public unsubscribe$ = new Subject<void>();
  layoutConfiguration: any;
  FIRST_TO_PANEL_LAYOUT: string;
  SECOND_TO_PANEL_LAYOUT: string;
  filterConfig: any;
  isLoading: boolean = true;
  myEvents: any[];
  // p: number = 1;
  // collection: any[];
  Filterdata: any;
  libEventConfig:any;
  dates: any;
  EventListCount: any;
  query: any;
  today = new Date();
  sort_by: any;
  todayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate())).slice(-2);
  yesterdayDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() - 1)).slice(-2);
  tommorrowDate = this.today.getFullYear() + '-' + ('0' + (this.today.getMonth() + 1)).slice(-2) + '-' + ('0' + (this.today.getDate() + 1)).slice(-2);
  
  /**
   * To navigate to other pages
   */
  route: Router;

   @Input() paginateLimit: number = 12;
  pageNumber: number = 1;
  
  /**
  * To store deleting content id
  */
  // private currentContentId: ContentIDParam;

  constructor(
    private eventListService:EventListService,
    private router: Router,
    public userService: UserService,
    private eventFilterService: EventFilterService,
    private toasterService: ToasterService,
    public layoutService: LayoutService,
    private sbToastService: SbToastService,
    route: Router
  ) {
    this.route = route;
  }

  ngOnInit() {
    this.initLayout();

    this.fecthAllEvents();

    this.showFilters();

    console.log('Static Event List - ', this.eventList);
  }

  onPageBoundsCorrection(number: number) {
    this.pageNumber = number;
}

  redoLayout() {
    if (this.layoutConfiguration != null) {
      this.FIRST_TO_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, this.layoutConfiguration, COLUMN_TYPE.threeToNine);
      this.SECOND_TO_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, this.layoutConfiguration, COLUMN_TYPE.threeToNine);
    } else {
      this.FIRST_TO_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(0, null, COLUMN_TYPE.threeToNine);
      this.SECOND_TO_PANEL_LAYOUT = this.layoutService.redoLayoutCSS(1, null, COLUMN_TYPE.threeToNine);
    }
  }

  initLayout() {
    this.layoutConfiguration = this.layoutService.initlayoutConfig();
    this.redoLayout();
    this.layoutService.switchableLayout().
      pipe(takeUntil(this.unsubscribe$)).subscribe(layoutConfig => {
        if (layoutConfig != null) {
          this.layoutConfiguration = layoutConfig.layout;
          this.redoLayout();
        }
      });
  }

  /**
   * For get List of events
   */
  fecthAllEvents() {
    this.Filterdata = {
      "status": [],
      "objectType": "Event",
      "owner": this.userService.userid
    };

    this.eventListService.getEventList(this.Filterdata).subscribe((data: any) => {
      this.eventList = data.result?.Event;
      this.EventListCount = data.result?.count;

      this.eventList.forEach((item, index) => {
        var array = JSON.parse("[" + item.venue + "]");
        this.eventList[index].venue = array[0].name;
      });

      this.isLoading = false;
    }, err => { console.log("err", err); }
    )
  }

  public deleteEvent(contentIds) {
    this.sbToastService.showIziToastMsg("Delete functionality is a work in progress.", "warning");
  }

  /**
   * For subscibe click action on event card
   */
  navToEventDetail(event) {
    this.router.navigate(['workspace/add/event'], {
      queryParams: {
        identifier: event.identifier
      }
    });
  }

  showFilters() {
    this.eventListService.getMyEventsFilterFormConfig().subscribe((data: any) => {
      this.filterConfig = data.result['form'].data.fields;
      this.isLoading = false;

      console.log('eventfilters = ', data.result['form'].data.fields);
    },
      (err: any) => {
        console.log('err = ', err);
      });
  }

  setEventConfig() {
    this.libEventConfig = {
      context: {
        user: this.userService.userProfile,
        identifier: '',
        channel: this.userService.channel,
        authToken: '',
        sid: this.userService.sessionId,
        uid: this.userService.userid,
        additionalCategories: 'additionalCategories',
      },
      config: {
        mode: 'list'
      }
    };
  }

  getFilteredData(event) {
    if (event.search) {
      this.Filterdata = {
        "status": [],
        "objectType": "Event",
        "owner":this.userService.userid
      };
      this.query = event.target.value;
    }
    // else if ((event.filtersSelected.eventTime) && (event.filtersSelected.eventType) && (event.filtersSelected.eventStatus)) {
    //   switch (event.filtersSelected.eventTime) {
    //     case "Past":
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //     case "Upcoming":
    //       this.dates = {
    //         "min": this.todayDate
    //       }
    //       break;
    //     default:
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //   }
    //   this.Filterdata = {
    //     "status": event.filtersSelected.eventStatus,
    //     "eventType": event.filtersSelected.eventType,
    //     "startDate": this.dates,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    // else if ((event.filtersSelected.eventTime) && (event.filtersSelected.eventType)) {
    //   switch (event.filtersSelected.eventTime) {
    //     case "Past":
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //     case "Upcoming":
    //       this.dates = {
    //         "min": this.todayDate
    //       }
    //       break;
    //     default:
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //   }
    //   this.Filterdata = {
    //     "status": [],
    //     "eventType": event.filtersSelected.eventType,
    //     "startDate": this.dates,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    // else if ((event.filtersSelected.eventTime) && (event.filtersSelected.eventStatus)) {
    //   switch (event.filtersSelected.eventTime) {
    //     case "Past":
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //     case "Upcoming":
    //       this.dates = {
    //         "min": this.todayDate
    //       }
    //       break;
    //     default:
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //   }
    //   this.Filterdata = {
    //     "status": event.filtersSelected.eventStatus,
    //     "startDate": this.dates,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    // else if ((event.filtersSelected.eventType) && (event.filtersSelected.eventStatus)) {
    //   this.Filterdata = {
    //     "status": event.filtersSelected.eventStatus,
    //     "eventType": event.filtersSelected.eventType,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    // else if (event.filtersSelected.eventType) {
    //   this.Filterdata = {
    //     "status": [],
    //     "eventType": event.filtersSelected.eventType,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    else if (event.filtersSelected.eventStatus) {
      this.Filterdata = {
        "status": event.filtersSelected.eventStatus,
        "objectType": "Event",
        "owner": this.userService.userid
      };
    }
    // else if (event.filtersSelected.eventTime) {
    //   switch (event.filtersSelected.eventTime) {
    //     case "Past":
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //     case "Upcoming":
    //       this.dates = {
    //         "min": this.todayDate
    //       }
    //       break;
    //     default:
    //       this.dates = {
    //         "max": this.todayDate
    //       }
    //       break;
    //   }
    //   this.Filterdata = {
    //     "status": [],
    //     "startDate": this.dates,
    //     "objectType": "Event",
    //     "owner": this.userService.userid
    //   };
    // }
    else {
      this.Filterdata = {
        "status": [],
        "objectType": "Event",
        "owner": this.userService.userid
      };
    }
    var tempEventListData: any = [];
    this.eventListService.getEventList(this.Filterdata, this.query).subscribe((data) => {
      if (data.responseCode == "OK") {
        this.isLoading = false;
        delete this.eventList;

        let tempEventList: any = data.result.Event;
        var temp1: any;
        var temp2: any;
        for (var k in tempEventList) {
          temp1 = tempEventList[k].endDate;
          temp2 = tempEventList[k].endTime;
          var tempFilterData = temp1 + " " + temp2;

          var dTime = new Date();
          var dateTime: any;
          dateTime = this.todayDate + " " + dTime.toLocaleTimeString() + "+05:30";

          if (event.filtersSelected == undefined) {
            tempEventListData = tempEventList;
          } else if (event.filtersSelected.eventTime) {
            switch (event.filtersSelected.eventTime) {
              case "Past":
                if (tempFilterData < dateTime) {
                  tempEventListData.push(tempEventList[k]);
                }
                break;

              case "Upcoming":
                var timeTemp: any = dTime.toLocaleTimeString() + "+05:30";
                if (tempEventList[k].startDate >= this.todayDate && tempEventList[k].startDate + "-" + tempEventList[k].startTime > this.todayDate + "-" + timeTemp) {
                  tempEventListData.push(tempEventList[k]);
                }
                break;

              default:
                var timeTemp: any = dTime.toLocaleTimeString() + "+05:30";
                //console.log("this.todayDate :: "+this.todayDate);
                if (tempEventList[k].endDate >= this.todayDate && tempEventList[k].startDate + "-" + tempEventList[k].startTime < this.todayDate + "-" + timeTemp
                  && tempEventList[k].endDate + "-" + tempEventList[k].endTime >= this.todayDate + "-" + timeTemp) {
                  tempEventListData.push(tempEventList[k]);
                }
                break;
            }
          } else {
            tempEventListData = tempEventList;
          }
        }

        this.EventListCount = data.result?.count;
        this.eventList = tempEventListData;
        this.eventList.forEach((item, index) => {

          var array = JSON.parse("[" + item.venue + "]");
          this.eventList[index].venue = array[0].name;

        });

      }
    }, (err) => {
      this.isLoading = false;
      this.toasterService.error(err.error.result.messages[0]);

    });
  }

  sortData(event) {
    this.sort_by = { [event.filterStatus[0].sort_by]: event.filterStatus[0].SortType ? 'desc' : 'asc' };

    this.eventListService.getEventList(this.Filterdata, '', this.sort_by).subscribe((data: any) => {
      this.eventList = data.result?.Event;
      this.EventListCount = data.result?.count;
      this.eventList.forEach((item, index) => {

        var array = JSON.parse("[" + item.venue + "]");
        this.eventList[index].venue = array[0].name;
      });

      this.isLoading = false;
    }, err => { console.log("err", err); }
    )
  }

}
