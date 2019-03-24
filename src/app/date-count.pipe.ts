import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(inputDate:Date):any{

        let input:any = inputDate;

        let currentDate:any = new Date();


        let elapsed = Math.round(Math.abs(currentDate - input) / (1000*60*60*24)); // Time difference in days

        console.log(input)
        
        if(elapsed <= 0)
        {
            return "posted today"
        }
        else{
            return `posted ${elapsed} days ago`
        }

       
    }
  }

