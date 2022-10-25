import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/list.svg').default,
    description: (
      <>
        HelpPlace allows you to start learning without the need of any accounts or annoying popups so that you can focus on what's important! 
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Coder.svg').default,
    description: (
      <>
        HelpPlace lets you focus on your learning by providing only up-to-date and quality information.
      </>
    ),
  },
  {
    title: 'Upcoming Features',
    Svg: require('@site/static/img/FAQ.svg').default,
    description: (
      <>
       HelpPlace is constantly working on make our website perfect. Keep track of upcoming features here.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 

{
 "logoPosition": "right",
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2",
     "title": "Which of the following are the advantages of React.js?",
     "correctAnswer": "item4",
     "choices": [
      {
       "value": "item1",
       "text": "React.js can increase the application's performance with Virtual DOM."
      },
      {
       "value": "item2",
       "text": "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library."
      },
      {
       "value": "item3",
       "text": "React.js can render both on client and server side."
      },
      {
       "value": "item4",
       "text": "All of the above"
      }
     ]
    },
    {
     "type": "radiogroup",
     "name": "question1",
     "title": "What of the following is used in React.js to increase performance?",
     "correctAnswer": "item2",
     "choices": [
      {
       "value": "item1",
       "text": "Original DOM"
      },
      {
       "value": "item2",
       "text": "Virtual DOM"
      },
      {
       "value": "item3",
       "text": "Both A and B."
      },
      {
       "value": "item4",
       "text": "None of the above."
      }
     ]
    }
   ]
  }
 ]
}

*/