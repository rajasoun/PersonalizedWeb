
/*
 * GET home page.
 */


exports.index = function(req, res){
  res.render('index', { title: 'Personal Notes Manager' ,
  
  			content1:'1. Windows DKit Update - Regarding Vertical Scrolling - Spike Results',
			content2:'2. iPad DKit Update - Simulator Demo',
			content3:'3. Online Open Items',
  			footercontent1:'Last updated: 11th April 2012. '});
};



