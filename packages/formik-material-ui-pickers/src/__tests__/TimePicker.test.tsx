import * as React from 'react';
import { test, expect } from '@jest/globals';
import { Formik, Form, Field } from 'formik';
import renderer from 'react-test-renderer';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { TimePicker } from '../TimePicker';

test('TimePicker Renders Correctly', () => {
  const component = renderer.create(
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={{ test: new Date('2020-01-01') }}
        onSubmit={() => {}}
      >
        <Form>
          <Field component={TimePicker} name="test" label="Time" />
        </Form>
      </Formik>
    </MuiPickersUtilsProvider>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
