//create table data
//name, address, city, state, and zipcode
// create table houses (
//     house_id serial primary key,
//     name varchar(50),
//     address varchar(255),
//     city varchar(50),
//     state varchar(20),
//     zipcode integer
// )

//inserted data
// insert into houses (name, address, city, state, zipcode) values ('Mountain Mansion', '6220 E Donner Trail Cir', 'Salt Lake City', 'UT', 84108);
// insert into houses (name, address, city, state, zipcode) values ('Forest Cabin', '12286 E Willow Loop Rd', 'Brighton', 'UT', 84121);
// insert into houses (name, address, city, state, zipcode) values ('Classic Estate', '2384 E Field Rose Dr', 'Holladay', 'UT', 84121);
// insert into houses (name, address, city, state, zipcode) values ('European Stone Mansion', '2732 E Spring Creek Rd', 'Holladay', 'UT', 84117);
// insert into houses (name, address, city, state, zipcode) values ('Secluded Brick Abode', '2114 E Fardown Ave', 'Holladay', 'UT', 84121);
// insert into houses (name, address, city, state, zipcode) values ('Federal Heights Estate', '1509 E Military Way', 'Salt Lake City', 'UT', 84103);
// insert into houses (name, address, city, state, zipcode) values ('Expansive Industrial Home', '1123 S Carterville Rd', 'Orem', 'UT', 84097);
// insert into houses (name, address, city, state, zipcode) values ('Contemporary Custom Home', '9606 Aztec Dr', 'Cedar Hills', 'UT', 84062);

//alter table (image, monthly mortgage, desired rent)
//image, monthly mortgage amount, and desired rent (hint: save the SQL command for this to show your mentor).
//image URLs and Monthly Mortgage(rent recommendation is 1.25*Mortgage) for initial data table





/////////
//ALTER//
/////////
// alter table houses
// add image_url text;

// alter table houses
// add monthly_mortgage integer;

// alter table houses
// add desired_rent integer;





//update newly added columns
// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/IS27yxywvorgih0000000000.jpg'
// where house_id=1;

// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/ISmauc12n2590y1000000000.jpg'
// where house_id=2;
// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/ISqtvpgcdalxsp1000000000.jpg'
// where house_id=3;

// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/ISmq61pr6vflh11000000000.jpg'
// where house_id=4;

// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/ISi36mxhlh7cgv0000000000.jpg'
// where house_id=5;

// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/IS6qji161zvou91000000000.jpg'
// where house_id=6;
// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/ISu4vjhyqrgh750000000000.jpg'
// where house_id=7;

// update houses
// set image_url='https://photos.zillowstatic.com/cc_ft_576/IS66kdumy5g7jw1000000000.jpg'
// where house_id=8;

// update houses
// set monthly_mortgage=6605
// where house_id=1;

// update houses
// set monthly_mortgage=9058
// where house_id=2;
// update houses
// set monthly_mortgage=17109
// where house_id=3;

// update houses
// set monthly_mortgage=9540
// where house_id=4;

// update houses
// set monthly_mortgage=6115
// where house_id=5;

// update houses
// set monthly_mortgage=10983
// where house_id=6;

// update houses
// set monthly_mortgage=10525
// where house_id=7;

// update houses
// set monthly_mortgage=5986
// where house_id=8;

// update houses
// set desired_rent=8257
// where house_id=1;

// update houses
// set desired_rent=11325
// where house_id=2;

// update houses
// set desired_rent=21387
// where house_id=3;

// update houses
// set desired_rent=11925
// where house_id=4;

// update houses
// set desired_rent=7644
// where house_id=5;

// update houses
// set desired_rent=13729
// where house_id=6;

// update houses
// set desired_rent=13157
// where house_id=7;

// update houses
// set desired_rent=7483
// where house_id=8;

