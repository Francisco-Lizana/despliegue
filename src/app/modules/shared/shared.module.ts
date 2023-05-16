import { RouterModule } from '@angular/router'
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { SortPipe } from 'src/app/core/_pipes/sort.pipe';


import { ToastModule } from 'primeng/toast';

@NgModule({
    declarations: [
        // SortPipe,
     
        

    ],
    imports: [
        ToastModule,
        RouterModule,
        HttpClientModule,
        CommonModule,
        MatAutocompleteModule,
        MatListModule,
    ],
    providers: [SortPipe],
    bootstrap: [],
    exports: [
        ToastModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        CommonModule,
        MatListModule,
        MatInputModule,
        MatAutocompleteModule,
        MatCardModule,
      
    ],
})
export class SharedModule { }
