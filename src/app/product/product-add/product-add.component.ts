import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { FormGroup,FormControl,FormBuilder , Validators } from '@angular/forms';
import { Product } from '../product';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
  providers: [ProductserviceService]
})
export class ProductAddComponent implements OnInit {

  productForm: FormGroup;
  loading: boolean = false;
  product:Product;
 

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private _serviceProduct: ProductserviceService,private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }
  createForm() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      unitCost: ['', Validators.required],
    });
  }

  onFileChange(event) {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.productForm.get('avatar').setValue({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        })
      };
    }
  }


  onSubmit() {
    let product = new Product(
      this.productForm.controls['image'].value,
      this.productForm.controls['name'].value,
      this.productForm.controls['description'].value,
      this.productForm.controls['unitCost'].value);
    const formModel = this.productForm.value;
    this.loading = true;
    // In a real-world app you'd have a http request / service call here like
    this._serviceProduct.uploadProduct(formModel);
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
      this.loading = false;
    }, 1000);
  }

  clearFile() {
    this.productForm.get('avatar').setValue(null);
    this.fileInput.nativeElement.value = '';
  }
  // this.productForm = new FormGroup({
  //   firstname: new FormControl('', Validators.required),
  //   lastname: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
  //   username : new FormControl('',Validators.required),
  //   password : new FormControl('',Validators.required)
  // });

  // upload(event: any) {
  //   let files = event.target.files;
  //   let fData: FormData = new FormData;
  
  //   for (var i = 0; i < files.length; i++) {
  //       fData.append("file[]", files[i]);
  //   }

  //   let product: Product = new Product(
  //     this.productForm.controls['image'].value,
  //     this.productForm.controls['name'].value,
  //     this.productForm.controls['description'].value,
  //     this.productForm.controls['unitCost'].value);
 
   

   
  
  //   fData.append("data", JSON.stringify(product));
  //   this._serviceProduct.uploadProduct(product).subscribe(
  //       response => this.handleResponse(response),
  //       error => this.handleError(error)
  //   )
  // }
  // handleResponse(response: any) {
  //   console.log(response);
  // }
  // handleError(error: string) {
  //   console.log(error);
  // }
}

