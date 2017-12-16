import * as React from 'react';
import { Card } from '../../components';

import { dataProjects } from './../../commons';


export const Projects = () => (
    <div className="mdl-grid page-content" id="#/">
        {
          dataProjects.map( (job, i) => (
            <Card
              key={i}
              img={job.image}
              description={job.description}
              tags={job.tags}
              project={job.project}/>
          ))
        } 
    </div>
);