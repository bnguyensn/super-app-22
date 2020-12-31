import * as React from 'react';
import Layout from '../../components/layout';
import Input from '../../components/input';

function getResultText(leftInput, rightInput) {
  if (!leftInput || !rightInput) {
    return `Please input both boxes!`;
  }

  if (leftInput === rightInput) {
    return `${leftInput} is the same as ${rightInput}!`;
  }

  const comparativeStr = leftInput < rightInput ? `before` : `after`;

  return `${leftInput} comes ${comparativeStr} ${rightInput}!`;
}

const IndexPage = () => {
  const [leftInput, setLeftInput] = React.useState('🐔');
  const [rightInput, setRightInput] = React.useState('🥚');

  return (
    <Layout>
      <h1 className="my-2 text-center text-4xl font-display">STRING VERSUS</h1>
      <div className="my-2 text-center text-xl">
        <i>Answering the universe&#39;s oldest question...JavaScript style.</i>
      </div>
      <div className="max-w-full flex justify-center items-center my-4 p-4 text-3xl">
        <Input label="Item A:" value={leftInput} setValue={setLeftInput} />
        <Input label="Item B:" value={rightInput} setValue={setRightInput} />
      </div>
      <div className="my-4 text-center text-3xl">
        {getResultText(leftInput, rightInput)}
      </div>
    </Layout>
  );
};

export default IndexPage;
