import IMG1 from './image/1.webp';
import IMG2 from './image/2.png';
import IMG3 from './image/3.jpg';
import IMG4 from './image/4.webp';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
} from '@/components/ui';

export function Banner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {[IMG1, IMG2, IMG3, IMG4].map((image, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="relative w-full h-[400px] flex aspect-square items-center justify-center">
                <Image
                  src={image}
                  alt="banner"
                  fill
                  className="object-contain"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
