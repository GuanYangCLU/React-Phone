import React from 'react';
import Table from './table';

const Homeworktable = () => {
  return (
    <div className='container'>
      <Table data={data} />
    </div>
  );
};

const data = [
  { head: '', col1: 'Knocky', col2: 'Flor', col3: 'Ella', col4: 'Juan' },
  {
    head: 'Breed',
    col1: 'Jack Russell',
    col2: 'Poodle',
    col3: 'Streetdog',
    col4: 'Cocker Spaniel'
  },
  { head: 'Age', col1: '16', col2: '9', col3: '10', col4: '5' },
  {
    head: 'Owner',
    col1: 'Mother-in-law',
    col2: 'Me',
    col3: 'Me',
    col4: 'Sister-in-law'
  },
  {
    head: 'Eating Habits',
    col1: "Eats everyone's leftovers",
    col2: 'Nibbles at food',
    col3: 'Hearty eater',
    col4: 'Will eat till he explodes'
  }
];

export default Homeworktable;
