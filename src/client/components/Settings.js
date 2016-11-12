import React from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

const Settings = () => (
  <div>
    <h1>Settings</h1>
    <div>
      <h2>Date format</h2>
      <Form>
        <Form.Field>
          <Checkbox
            radio
            label='2016-11-10'
            name='checkboxRadioGroup'
            value='this'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='November, 10'
            name='checkboxRadioGroup'
            value='that'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='a day ago'
            name='checkboxRadioGroup'
            value='that'
            checked
          />
        </Form.Field>
      </Form>
    </div>
  </div>
)

export default Settings
