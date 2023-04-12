'use client';

import { Card, Title, Text, Tab, TabList, Grid } from '@tremor/react';

import { useState } from 'react';

export default function DashboardPage(): JSX.Element {
  const [selectedView, setSelectedView] = useState('1');
  return (
    <main className="p-10">
      <Title>Dashboard</Title>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
      </Text>

      <TabList
        defaultValue={'1'}
        onValueChange={(value: string) => setSelectedView(value)}
        className="mt-6"
      >
        <Tab value={'1'} text="Page 1" />
        <Tab value={'2'} text="Page 2" />
      </TabList>

      {selectedView === '1' ? (
        <>
          <Grid
            className="mt-6 gap-x-6 gap-y-6"
            numColsMd={2}
            numColsLg={3}
          >
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
            <Card>
              {/* Placeholder to set height */}
              <div className="h-28" />
            </Card>
          </Grid>

          <div className="mt-6">
            <Card>
              <div className="h-80" />
            </Card>
          </div>
        </>
      ) : (
        <div className="mt-6">
          <Card>
            <div className="h-96" />
          </Card>
        </div>
      )}
    </main>
  );
}
