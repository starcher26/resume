import React from 'react'
import Loadable from 'react-loadable'
import Loading from '../../components/Loading'

const LoadableComponent = Loadable({
  loader: () => import('./education'),
  loading: Loading,
})
const LoadableEducation = (props) => <LoadableComponent {...props} />
export default LoadableEducation