import React from 'react'
import RepoStyle from './RepoStyle'
import { StyleSheet, View } from "react-native";

const RepoElement = ({ repo }) => {

  return (
    <View>
      {



        <RepoStyle
          key={repo.id}
          avatar_url={repo.owner.avatar_url + '?width=1&height=100'}
          owner={repo.owner.login}
          name={repo.name}
          html_url={repo.html_url}
          description={repo.description}
          stargazers_count={repo.stargazers_count}
          open_issues_count={repo.open_issues_count}

          created_at={repo.created_at}
        />


      }
    </View>
  )
}

export default RepoElement
