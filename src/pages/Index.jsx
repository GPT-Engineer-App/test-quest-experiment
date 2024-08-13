import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Cat } from 'lucide-react';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const CatFactCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  if (isLoading) return <Skeleton className="h-[100px] w-full" />;
  if (error) return <p>Error loading cat fact</p>;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Cat className="h-6 w-6" />
          Cat Fact of the Day
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{data.fact}</p>
      </CardContent>
    </Card>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">All About Cats</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Breeds</CardTitle>
              <CardDescription>Some popular cat breeds</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Siamese</li>
                <li>Persian</li>
                <li>Maine Coon</li>
                <li>Bengal</li>
                <li>Scottish Fold</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cat Behavior</CardTitle>
              <CardDescription>Common cat behaviors and what they mean</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Purring: Usually a sign of contentment</li>
                <li>Kneading: Often a sign of comfort or happiness</li>
                <li>Tail positioning: Can indicate mood (e.g., straight up for happy)</li>
                <li>Meowing: Communication with humans</li>
                <li>Scratching: Natural behavior to maintain claws</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Care Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5">
                <li>Provide a balanced diet suitable for their age and health</li>
                <li>Ensure fresh water is always available</li>
                <li>Regular vet check-ups and vaccinations</li>
                <li>Offer mental stimulation with toys and play</li>
                <li>Keep the litter box clean</li>
                <li>Groom regularly, especially long-haired breeds</li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mb-8">
          <img 
            src="https://placekitten.com/800/400" 
            alt="Cute cat" 
            className="w-full h-64 object-cover rounded-lg shadow-lg mx-auto"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <Badge variant="secondary">#CatLover</Badge>
          <Badge variant="secondary">#Meow</Badge>
          <Badge variant="secondary">#Purr</Badge>
          <Badge variant="secondary">#CatLife</Badge>
          <Badge variant="secondary">#WhiskerWednesday</Badge>
        </div>
        
        <CatFactCard />
      </div>
    </div>
  );
};

export default Index;