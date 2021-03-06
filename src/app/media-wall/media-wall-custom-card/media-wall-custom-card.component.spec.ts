import { TestBed } from '@angular/core/testing';
import { MatSlideToggleModule } from '@angular/material';
import { MediaWallCustomCardComponent } from './media-wall-custom-card.component';

describe('MediaWallCustomCardComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [,
				MatSlideToggleModule
			],
			declarations: [
				MediaWallCustomCardComponent
			]
		});

		it('should create an instance', () => {
			const fixture = TestBed.createComponent(MediaWallCustomCardComponent);
			const component = fixture.debugElement.componentInstance;
			expect(component).toBeTruthy();
		});
	});
});
