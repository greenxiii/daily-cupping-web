import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addTest,
  addTestAsync,
  selectCupTests,
} from './cupTestSlice';
import { useInput } from '../../hooks/input-hook';
import styles from './CupTest.module.css';

export function CupTest() {
  const cupTests = useSelector(selectCupTests);
  const dispatch = useDispatch();

  const { value: title, bind: bindTitle, reset: resetTitle } = useInput('');
  const { value: origin, bind: bindOrigin, reset: resetOrigin } = useInput('');

  const submit = () => {
    console.log(title, origin);
    // dispatch(addTest({ title, origin }));
    dispatch(addTestAsync({ title, origin }));
    resetTitle();
    resetOrigin();
  }

  return (
    <div>
      { cupTests.length }
      <div className={styles.row}>
        <input
          className={styles.textbox}
          placeholder="Title"
          {...bindTitle}
        />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          placeholder="Origin"
          {...bindOrigin}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={submit}
        >
          Add
        </button>
        <button
          className={styles.asyncButton}
        onClick={submit}
        >
          Add async
        </button>
      </div>
    </div>
  );
}
