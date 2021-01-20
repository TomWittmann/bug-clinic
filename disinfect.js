/**
 * Code linters like jshint can identify issues that would otherwise go unnoticed.
 * 
 * 
 */

today = 'today';

console.log('date is', timestamp());
console.log('today is', today);

function timestamp() {
  today = Date();
  return today;
}