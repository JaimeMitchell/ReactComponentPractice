import React from 'react';

const LoginControls = () => {
  return (
    <section>
      <form>
        <input type='text' placeholder='Sign in' name='sign-in'></input>
        <button type='button' placeholder='Sign up' name='sign-up'>
          Sign in
        </button>
      </form>
    </section>
  );
};

export default LoginControls;
