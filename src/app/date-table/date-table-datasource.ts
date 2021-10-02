import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { HttpClient } from  '@angular/common/http';
import { Event } from "../shared/models/event.model";

// TODO: Replace this with your own data model type
export interface DateTableItem {
  name: string;
   id: number;
   opis: string;
   Miasto: string;
   Od_kiedy: string;
   Do_kiedy: string;
   Typ_Eventu: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: DateTableItem[] = [
  {id: 1, name: 'Kurs SDA',opis: 'coś tam', Miasto: 'warszawa', Od_kiedy: '202-01-10', Do_kiedy: '2020-01-12', Typ_Eventu:'CONCERT'},
  {id: 2, name: 'Kurs PHYTON',opis: 'ktoś tam 2',Miasto: 'Lódz', Od_kiedy: '2020-01-11', Do_kiedy: '2020-01-12',Typ_Eventu:'ANOTHER'},
  {id: 3, name: 'Kurs MS Office',opis: 'coś tam 4',Miasto: 'Kraków ', Od_kiedy: '2020-01-12', Do_kiedy: '2020-01-13',Typ_Eventu:'CONCERT'},


];

/**
 * Data source for the DateTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DateTableDataSource extends DataSource<DateTableItem> {
  data: DateTableItem[] = [];
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
// w konstruktorze tzreba jako argument dodać http:HttpClient, następnie stworzyć metodę zwracającą
//(w moim przypadku calą listę Eventów)
  constructor(private http:HttpClient) {
    super();
  }
findEventsList(){
this.http.get<[Event]>("https://eventvariete.herokuapp.com/events").subscribe(events=>
{ events.forEach(event=>{
this.data.push({name: event.name,
                        id: event.id ,
                        opis: event.description,
                        Miasto: event.city,
                        Od_kiedy: event.eventStartDate,
                        Do_kiedy: event.eventEndDate,
                        Typ_Eventu: event.typeOfEvent,})})


}
);
}
  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<DateTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: DateTableItem[]): DateTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: DateTableItem[]): DateTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'Miasto': return compare(a.Miasto, b.Miasto, isAsc);
        case 'Od_kiedy': return compare(a.Od_kiedy, b.Od_kiedy, isAsc);
        case 'Do_kiedy': return compare(a.Do_kiedy, b.Do_kiedy, isAsc);
        case 'Typ_Eventu': return compare(a.Typ_Eventu, b.Typ_Eventu, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
