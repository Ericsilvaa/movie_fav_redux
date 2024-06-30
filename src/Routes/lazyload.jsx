import React from 'react'

// higher order component
const WithLazyLoad = (importFunc) => {
  const LazyComponent = React.lazy(importFunc)

  const ComponentWithLazyLoad = (props) => {
    return (
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <LazyComponent {...props} />
      </React.Suspense>
    )
  }
  return ComponentWithLazyLoad
}

export default WithLazyLoad
