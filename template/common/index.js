<% _.forEach(config.projects, function(project){ %>import * as {{$$.convertUrl(project.name)}} from './{{project.name}}'<% }) %>

export {<% _.forEach(config.projects, function(project, i){ %>
  {{$$.convertUrl(project.name)}}<% if(config.projects.length - 1 !== i) { %>,<% } %><% }) %>
}
