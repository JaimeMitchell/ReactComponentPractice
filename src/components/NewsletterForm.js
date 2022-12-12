import React from 'react';

const NewsletterForm = () => {
  return (
    <form>
      <input
        type='text'
        placeholder='Email address'
        name='email-address__newletterForm'
      ></input>
      <button type='submit'>Sign up for GitHub</button>
    </form>
  );
};

export default NewsletterForm;
