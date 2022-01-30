(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(1488)}])},1488:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return b}});var a=e(5893),r=e(7294),s=e(7379),i=e(5453),o=e(4293);function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}function c(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var a,r,s=[],i=!0,o=!1;try{for(e=e.call(n);!(i=(a=e.next()).done)&&(s.push(a.value),!t||s.length!==t);i=!0);}catch(u){o=!0,r=u}finally{try{i||null==e.return||e.return()}finally{if(o)throw r}}return s}}(n,t)||function(n,t){if(!n)return;if("string"===typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var n,t,e=(n=["\n  display: inline-block;\n  color: ",";\n  padding: 4px;\n"],t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}})));return d=function(){return e},e}var l=s.default.div.withConfig({componentId:"sc-b801e7aa-0"})(d(),(function(n){return n["aria-current"]?"steelblue":"gray"})),f=function(n){var t={react:r};return Object.entries(n).forEach((function(n){var e=c(n,2),a=e[0],r=e[1];try{var s=(0,o.Uq)(r,{require:(0,o.ee)(t)});t[a]=s,t[a.replace(/\.[jt]sx?$/,"")]=s}catch(i){throw[a,i]}})),t},k=function(){var n=(0,r.useState)("import { useReducer } from 'react'\nimport AddTask from './AddTask.js'\nimport TaskList from './TaskList.js'\n\nlet nextId = 3\nconst initialTasks = [\n  { id: 0, text: 'Philosopher\u2019s Path', done: true },\n  { id: 1, text: 'Visit the temple', done: false },\n  { id: 2, text: 'Drink matcha', done: false },\n]\n\nexport default function TaskBoard() {\n  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)\n\n  function handleAddTask(text) {\n    dispatch({\n      type: 'added',\n      id: nextId++,\n      text: text,\n    })\n  }\n\n  function handleChangeTask(task) {\n    dispatch({\n      type: 'changed',\n      task: task,\n    })\n  }\n\n  function handleDeleteTask(taskId) {\n    dispatch({\n      type: 'deleted',\n      id: taskId,\n    })\n  }\n\n  return (\n    <>\n      <h1>Day off in Kyoto</h1>\n      <AddTask onAddTask={handleAddTask} />\n      <TaskList\n        tasks={tasks}\n        onChangeTask={handleChangeTask}\n        onDeleteTask={handleDeleteTask}\n      />\n    </>\n  )\n}\n\nfunction tasksReducer(tasks, action) {\n  switch (action.type) {\n    case 'added': {\n      return [\n        ...tasks,\n        {\n          id: action.id,\n          text: action.text,\n          done: false,\n        },\n      ]\n    }\n    case 'changed': {\n      return tasks.map((t) => {\n        if (t.id === action.task.id) {\n          return action.task\n        } else {\n          return t\n        }\n      })\n    }\n    case 'deleted': {\n      return tasks.filter((t) => t.id !== action.id)\n    }\n    default: {\n      throw Error('Unknown action: ' + action.type)\n    }\n  }\n}\n"),t=n[0],e=n[1],s=(0,r.useState)("import { useState } from 'react'\n\nexport default function TaskList({ tasks, onChangeTask, onDeleteTask }) {\n  return (\n    <ul>\n      {tasks.map((task) => (\n        <li key={task.id}>\n          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />\n        </li>\n      ))}\n    </ul>\n  )\n}\n\nfunction Task({ task, onChange, onDelete }) {\n  const [isEditing, setIsEditing] = useState(false)\n  let taskContent\n  if (isEditing) {\n    taskContent = (\n      <>\n        <input\n          value={task.text}\n          onChange={(e) => {\n            onChange({\n              ...task,\n              text: e.target.value,\n            })\n          }}\n        />\n        <button onClick={() => setIsEditing(false)}>Save</button>\n      </>\n    )\n  } else {\n    taskContent = (\n      <>\n        {task.text}\n        <button onClick={() => setIsEditing(true)}>Edit</button>\n      </>\n    )\n  }\n  return (\n    <label>\n      <input\n        type=\"checkbox\"\n        checked={task.done}\n        onChange={(e) => {\n          onChange({\n            ...task,\n            done: e.target.checked,\n          })\n        }}\n      />\n      {taskContent}\n      <button onClick={() => onDelete(task.id)}>Delete</button>\n    </label>\n  )\n}\n"),u=s[0],d=s[1],k=(0,r.useState)("import { useState } from 'react'\n\nexport default function AddTask({ onAddTask }) {\n  const [text, setText] = useState('')\n  return (\n    <>\n      <input\n        placeholder=\"Add task\"\n        value={text}\n        onChange={(e) => setText(e.target.value)}\n      />\n      <button\n        onClick={() => {\n          setText('')\n          onAddTask(text)\n        }}\n      >\n        Add\n      </button>\n    </>\n  )\n}\n"),h=k[0],p=k[1],x=(0,r.useState)(null),g=x[0],j=x[1],v=(0,r.useState)(null),T=v[0],m=v[1],b=(0,r.useState)(0),y=b[0],C=b[1],w=(0,r.useMemo)((function(){try{var n={require:(0,o.ee)(f({"./TaskList.js":u,"./AddTask.js":h}))};return g&&j(null),n}catch(r){var t=c(r,2),e=t[0],a=t[1];j("[".concat(e.substring(2),"] ").concat(a.toString()))}}),[u,h]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(i.W2,{children:[(0,a.jsxs)(i.Nf,{children:[(0,a.jsx)(i.ML,{hidden:0!==y,value:t,onChange:e}),(0,a.jsx)(i.ML,{hidden:1!==y,value:h,onChange:p}),(0,a.jsx)(i.ML,{hidden:2!==y,value:u,onChange:d})]}),(0,a.jsxs)(i.ph,{children:[(0,a.jsx)(i.MB,{children:g?(0,a.jsx)(i.jj,{children:g}):(0,a.jsx)(o.RC,{code:t,scope:w,onRendered:function(n){n?m(n.toString()):T&&m(null)}})}),T&&(0,a.jsx)(i.jj,{children:T})]})]}),(0,a.jsx)("div",{children:["App.js","AddTask.js","TaskList.js"].map((function(n,t){return(0,a.jsx)(l,{"aria-current":t===y,onClick:function(){return C(t)},children:n},n)}))})]})},h=e(2660);function p(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function x(){var n=p(["\n  max-width: 1024px;\n  margin: 0 auto;\n  padding: 24px 16px;\n"]);return x=function(){return n},n}function g(){var n=p(["\n  color: steelblue;\n"]);return g=function(){return n},n}function j(){var n=p(["\n  color: steelblue;\n"]);return j=function(){return n},n}var v=s.default.div.withConfig({componentId:"sc-3fa77a5c-0"})(x()),T=s.default.h3.withConfig({componentId:"sc-3fa77a5c-1"})(g()),m=s.default.div.withConfig({componentId:"sc-3fa77a5c-2"})(j()),b=function(){return(0,a.jsxs)(v,{children:[(0,a.jsx)(m,{children:"Run your React code on the go, in different ways"}),h.$.map((function(n){var t=n.key,e=n.title,s=n.code;return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(T,{id:t,children:e}),(0,a.jsx)(i.v5,{code:s,scope:h.e,language:"tsx"})]},t)})),(0,a.jsx)(T,{id:"multi-files",children:"Multi files"}),(0,a.jsx)(k,{})]})}}},function(n){n.O(0,[477,21,774,888,179],(function(){return t=5301,n(n.s=t);var t}));var t=n.O();_N_E=t}]);