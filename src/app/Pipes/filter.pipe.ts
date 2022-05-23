import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, filterString:string) {
    console.log(filterString)
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const searchNotes = [];
    for (const note of value){
      if(note.title.toLowerCase().includes(filterString.toLowerCase()) || note.description.toLowerCase().includes(filterString.toLowerCase())){
        searchNotes.push(note);
    }
  }
return searchNotes;
}
}