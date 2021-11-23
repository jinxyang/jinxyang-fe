import React from 'react'

import {
  Container,
  App,
  Form,
  Input,
  Select,
  Radio,
  Switch,
} from '@jinxyang/components'

const components = {
  Input,
  Select,
  Radio,
  Switch,
}

const fields = [
  {
    type: 'Input',
    key: 'name',
    label: 'Name',
    rules: [{ type: 'string', required: true, message: `'Name' is required` }],
  },
  {
    type: 'Switch',
    key: 'labelInline',
    label: 'Label Inline',
    rules: [
      { type: 'number', required: true, message: `'Label Inline' is required` },
    ],
  },
  {
    type: 'Switch',
    key: 'labelLeft',
    label: 'Label Left',
    rules: [
      { type: 'number', required: true, message: `'Label Left' is required` },
    ],
  },
  {
    type: 'Select',
    key: 'labelWidth',
    label: 'Label Width',
    props: {
      options: [
        { value: '90px', label: '90px' },
        { value: '92px', label: '92px' },
        { value: '94px', label: '94px' },
        { value: '96px', label: '96px' },
        { value: '98px', label: '98px' },
        { value: '100px', label: '100px' },
      ],
    },
  },
]

const Dashboard = () => {
  const [values, setValues] = React.useState({})
  const [isErrorShow, setErrorShow] = React.useState(false)

  const handleSubmit = (message) => {
    setErrorShow(!!message)
  }

  return (
    <Container scrollY={true}>
      <App>
        <Form
          labelInline={!!values.labelInline}
          labelWidth={values.labelWidth?.[0] ?? '90px'}
          labelLeft={!!values.labelLeft}
          components={components}
          fields={fields}
          values={values}
          showError={isErrorShow}
          onChange={setValues}
          onSubmit={handleSubmit}
        />
      </App>
    </Container>
  )
}

export default Dashboard
