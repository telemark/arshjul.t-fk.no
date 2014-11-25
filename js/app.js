'use strict';

var config
  , data
  , segments
  ;

/* Sorting function, date oldest to newest
 * date-format needs to be yyyy-mm-dd */
function activitySortByDate(a,b){
  var a = parseInt(a.date.split('-').join(''),10);
  var b = parseInt(b.date.split('-').join(''),10);

  return a>b ? 1 : a<b ? -1 : 0;
}

/* Parses the data-file to generate the segments needed for the chart */
function generateSegments(data){
  var segments = []
    ;

  for (var i in data) {
    var cat = data[i];
    for (var j in cat.activities) {
      var activities = cat.activities[j];
      var segment = {
        "title" : cat.title,
        "description" : cat.description,
        "color": activities.length > 0 ? cat.color : config.noActivitiesColor,
        "color_category" : cat.color,
        "no_activities_message" : cat.no_activities_message,
        "activities": activities
      };

      segments.push(segment);
    }
  }

  return segments;
}

/* Get all activities for all segments in a given "slice" */
function getActivitiesSlice(d){
  var slice = d.value.toString();
  var str = '<h2>' + d.text + '<span class="trash-me" id="trash-me">[x]</span></h2>';
  var activities;
  var activity;
  var category;
  for (var c in data){
    category = data[c];
    activities = category.activities[slice];
    str += '<h2><span class="fa fa-square" style="color: ' + category.color + '"></span> ' + category.title + '</h2>';
    if(activities.length > 0){
      activities.sort(activitySortByDate)
      for (var i in activities){
        activity = activities[i];
        str += '<div class="activity"><span class="date">' + activity.date + '</span>' + activity.title + '<br/>' + activity.description + '</div>'
      }
    } else {
      str += category.no_activities_message;
    }
  }

  return str;
}

/* Get all activities for a given segment */
function getActivitiesSegment(d){
  var str = '<h2><span class="fa fa-square" style="color:' + d.color_category + '"></span> ' + d.title + '<span class="trash-me" id="trash-me">[x]</span></h2>';

  var activity;

  if(d.activities.length > 0){
    for (var i in d.activities){
      activity = d.activities[i];
      str += '<div class="activity"><span class="date">' + activity.date + '</span>' + activity.title + '<br/>' + activity.description + '</div>'
    }
  } else {
    str += d.no_activities_message;
  }

  return str;
}

/* Get all activities for a given collection */
function getActivitiesCollection(collection){
  var activity;
  var activities = [];
  var segmentArray = Object.keys(collection.activities);
  var str = '<h2><span class="fa fa-square" style="color:' + collection.color + '"></span> ' + collection.title + '<span class="trash-me" id="trash-me">[x]</span></h2>';

  segmentArray.forEach(function(segmentNumber){
    var segment = collection.activities[segmentNumber];
    if(segment.length > 0){
      for(var i in segment){
        activities.push(segment[i]);
      }
    }
  });

  activities.sort(activitySortByDate);

  activities.forEach(function(activity){
    str += '<div class="activity"><span class="date">' + activity.date + '</span>' + activity.title + '<br/>' + activity.description + '</div>';
  });

  return str;
}

function initializeVisualisation(){

    var chart = circularHeatChart()
      .segmentHeight(config.segmentHeight)
      .innerRadius(config.innerRadius)
      .numSegments(config.numSegments)
      .radialLabels(config.radialLabels)
      .segmentLabels(config.segmentLabels)
      .margin(config.margin);

    chart.accessor(function(d) {return d.color;});

    d3.select('#yearwheel')
      .selectAll('svg')
      .data([segments])
      .enter()
      .append('svg')
      .call(chart);

    /* Add a click event for segment */
    d3.selectAll("#yearwheel path").on('click', function() {
      var d = d3.select(this).data()[0];
      d3.select("#info").html(getActivitiesSegment(d));
      deleteCtrl();
    });

    /* Visual pointer for where you are in the circle */
    d3.selectAll("#yearwheel path").on('mouseover', function() {
      d3.select(this).attr('fill', config.hoverColor);
    });

    /* Resets path to original color */
    d3.selectAll("#yearwheel path").on('mouseout', function() {
      var p = d3.select(this).data()[0];
      d3.select(this).attr('fill', p.color);
    });

    /* Add a click event for labels (slices) */
    d3.selectAll("#yearwheel text").on('click', function() {
      var d = d3.select(this).data()[0];
      d3.select("#info").html(getActivitiesSlice(d));
      deleteCtrl();
    });
}

function createMenuItem(item){
  var element = document.createElement("div")
    , textContent = '<h2><span class="fa fa-square" style="color: ' + item.color + '"></span> ' + item.title + '</h2>'
    ;

  element.innerHTML = textContent;

  element.addEventListener("click", function(){
    d3.select("#info").html(getActivitiesCollection(item));
    deleteCtrl();
  });

  return element;
}

function initializeMenu(){
  var menu = document.getElementById("menu");

  data.forEach(function(item){
    var menuItem = createMenuItem(item);
    menu.appendChild(menuItem);
  });
}

function deleteCtrl(){
  d3.select("#trash-me").on("click", function(){
    d3.select("#info").html('');
  });
}

/* loads data, initialize visualizations and menu */
d3.json("data/data.json", function(error, json) {

  if (error) {
    return console.error(error);
  }

  data = json.data;
  config = json.config;
  segments = generateSegments(json.data);

  d3.select("#wheel_header").html(config.title);

  initializeVisualisation();
  initializeMenu();

});