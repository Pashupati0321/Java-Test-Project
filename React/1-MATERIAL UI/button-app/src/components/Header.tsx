import { Card, CardContent, CardHeader } from '@mui/material'
import React from 'react'

function Header() {
  return (
    <div>
      <Card style={{margin:10, textAlign:'center', backgroundColor:'Highlight'}}>
        <CardContent >
            <h1 className="text-center my-3" >Welcome to courses application</h1>
        </CardContent>
      </Card>
    </div>
  )
}

export default Header
