import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';

/*

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 2,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    annualFee: 4,
    termsAndConditions: 'Following are the terms and conditions',
    createdData: '2023-31-08',
    updatedDate: '2023-31-08',
  }
];
*/

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss']
})
export class CreditcardsComponent {

  creditcards: CreditCard[] = [];

  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data:CreditCard[]) => {
      this.creditcards = data;

      this.dataSource = new MatTableDataSource(this.creditcards);
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort;
    })
  }

  dataSource = new MatTableDataSource(this.creditcards)

  displayColumns = ["select", "id", "name", "description", "bankName", "maxCredit", "interestRate", "active", "recommendedScore"]
  //dataSource = new MatTableDataSource(TABLE_DATA);
  selection = new SelectionModel(true, []);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort!: MatSort;

  selectHandler(row: CreditCard){
    this.selection.toggle(row as never);
  }

}
