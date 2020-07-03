import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Product } from 'src/app/core/products/products.model';

@Component({
   selector: 'app-product-form',
   templateUrl: './product-form.component.html',
   styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent {
   @Input() categories: [];
   @Output() saved = new EventEmitter();
   @Input() set product(value: Product | null) {
      if (!value) {
         return;
      }

      this.form.setValue(value);
   }

   form = this.formBuilder.group({
      id: [''],
      name: [
         '',
         [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[ a-zA-Z0-9]*'),
         ],
      ],
      description: [
         '',
         [
            Validators.required,
            Validators.minLength(3),
            Validators.pattern('[ a-zA-Z0-9]*'),
         ],
      ],
      price: [
         '',
         [Validators.required, Validators.pattern('^[0-9]*(\\.[0-9]{2}$)')],
      ],
      category: ['', Validators.required],
      imageUrl: [
         '',
         [
            Validators.required,
            Validators.pattern('[^\\s]+(\\.(jpg|png|gif|bmp))$'),
         ],
      ],
      phoneNumber: [
         '',
         [
            Validators.required,
            Validators.maxLength(10),
            Validators.pattern('[0-9]*'),
         ],
      ],
      select: [''],
   });

   constructor(private formBuilder: FormBuilder) {}

   save() {
      const product = this.form.value;
      this.saved.emit(product);
   }

   reset() {
      this.form.reset();
   }
}
