import { ADD_SERVICE, REMOVE_SERVICE, CHANGE_SERVICE_FIELD, CHANGE_SERVICE_EDIT, FILTER_SERVICE, FILTER_SERVICE_LIST, CANCEL_EDIT } from "./actionTypes";

export function addService(sId, name, price) {
  return {type: ADD_SERVICE, payload: {sId, name, price}}
}

export function removeService(id) {
  return {type: REMOVE_SERVICE, payload: {id}}
}

export function changeServiceField(name, value) {
  return {type: CHANGE_SERVICE_FIELD, payload: {name, value}}
}

export function serviceEdit(nameS, price, id) {
  return {type: CHANGE_SERVICE_EDIT, payload: {nameS, price, id} }
}

export function filterServiceList(input) {
  return {type: FILTER_SERVICE_LIST, payload: input}
}

export function filterService(line) {
  return {type: FILTER_SERVICE, payload: line}
}

export function cancelEdit() {
  return {type: CANCEL_EDIT}
}
