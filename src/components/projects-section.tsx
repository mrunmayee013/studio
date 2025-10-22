import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const projects = [
  {
    id: 'project-1',
    name: 'Nike Pre-Launch',
    description: 'Crafted a user-friendly interface for pre-loved Nike shoes, focusing on clarity and ease of use.',
    link: 'https://www.figma.com/proto/swt3vXmOHd3fgHDERNrfuB/Nike-jordan-Pre-launch-website-design?node-id=1-33&t=DClZ5wWB6h2cgMcl-1',
  },
  {
    id: 'project-2',
    name: 'Restaurant App with Healthy Choices Filter',
    description: 'Enhanced the UX of a restaurant app, helping users quickly find healthy meal options.',
    link: 'https://www.figma.com/proto/wYDn0LcGXYyEGRufH4Nk3l/flavorfleet?node-id=144-64&starting-point-node-id=144%3A64&t=KUmkfJf4ct4Q83Pc-1',
  },
  {
    id: 'project-3',
    name: 'Personal Blog',
    description: 'A personal blog to share my thoughts on design, technology, and life.',
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
        Some Selected Work
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {projects.map((project) => (
            <CarouselItem key={project.id} className="md:basis-1/2">
               <div className="p-1 h-full">
                <Card className="flex flex-col group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="p-6 flex flex-col flex-grow">
                    <CardHeader className="p-0">
                      <CardTitle>{project.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 pt-2 flex-grow">
                      <CardDescription>{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-4">
                      <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary group/link">
                        <Link href={project.link} target="_blank" rel="noopener noreferrer">
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
