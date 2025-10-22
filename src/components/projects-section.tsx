import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    id: 'project-1',
    name: 'Nike Pre-Launch',
    description: 'Crafted a user-friendly interface for pre-loved Nike shoes, focusing on clarity and ease of use.',
    image: PlaceHolderImages.find(p => p.id === 'project-1'),
    link: '#',
  },
  {
    id: 'project-2',
    name: 'Dashboard Vision',
    description: 'A comprehensive data visualization dashboard for a SaaS platform, designed for clarity and efficiency.',
    image: PlaceHolderImages.find(p => p.id === 'project-2'),
    link: '#',
  },
];

export function ProjectsSection() {
  return (
    <section className="w-full max-w-5xl space-y-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-headline">
        Some Selected Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="flex flex-col group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="aspect-[3/2] overflow-hidden">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.image.description}
                  width={600}
                  height={400}
                  data-ai-hint={project.image.imageHint}
                  className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <CardHeader className="p-0">
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 pt-2 flex-grow">
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-0 pt-4">
                <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary group/link">
                  <Link href={project.link}>
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
