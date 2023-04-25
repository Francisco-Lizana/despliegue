import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from '@angular/material/icon';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { StepsModule } from 'primeng/steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { NgxCaptchaModule } from 'ngx-captcha';
import {PanelMenuModule} from 'primeng/panelmenu';
import {AvatarModule} from 'primeng/avatar';
import {RouterModule} from '@angular/router'

import { SplitButtonModule } from 'primeng/splitbutton';
import { MatStepperModule } from '@angular/material/stepper';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { EditorModule } from 'primeng/editor';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { TabViewModule } from 'primeng/tabview';
import { MatDialogModule } from '@angular/material/dialog';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MessagesModule } from 'primeng/messages';
import { MatTabsModule } from '@angular/material/tabs';
import { MessageModule } from 'primeng/message';
import { MatRadioModule } from '@angular/material/radio'; import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ChipModule } from 'primeng/chip';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthService } from 'src/app/core/_services/auth.service';
import { ToastService } from 'src/app/core/_services/toast.service';
import { BadgeModule } from 'primeng/badge';
import { SortPipe } from 'src/app/core/_pipes/sort.pipe';
import { ImageModule } from 'primeng/image';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';





@NgModule({
declarations: [

    SortPipe,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,

],
imports: [

    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    BreadcrumbModule,
    ImageModule,
    RouterModule,
    InputTextModule,
    StepsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxCaptchaModule,
    PanelMenuModule,
    AvatarModule,
    CardModule,
    CheckboxModule,
    TabViewModule,
    FormsModule,
    MatAutocompleteModule,
    MatGridListModule,
    ChipModule,
    ScrollPanelModule,
    MatProgressSpinnerModule,
    BadgeModule,
    MessageModule,
    EditorModule,
    MatDialogModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,

],
providers: [SortPipe],
bootstrap: [],
exports: [
    TableModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatSidenavModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    MatCheckboxModule,
    DropdownModule,
    ImageModule,
    MatIconModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    ToolbarModule,
    MultiSelectModule,
    ContextMenuModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    StepsModule,
    AvatarModule,
    SplitButtonModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgxCaptchaModule,
    PanelMenuModule,
    BreadcrumbModule,
    DynamicDialogModule,
    ToolbarModule,
    TooltipModule,
    EditorModule,
    CardModule,
    CheckboxModule,
    TabViewModule,
    MatDialogModule,
    ProgressSpinnerModule,
    ConfirmDialogModule,
    MessagesModule,
    MatTabsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatGridListModule,
    ChipModule,
    ScrollPanelModule,
    BadgeModule,
    MessageModule,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
],
})
export class SharedModule { }
