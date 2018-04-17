import React from 'react'
import { connect } from 'react-redux'
import { submitPost } from '../actions'
import NewPost from '../components/NewPost'

const NewPostContainer = props => <NewPost {...props} />

export default connect(null, { submitPost })(NewPostContainer)
