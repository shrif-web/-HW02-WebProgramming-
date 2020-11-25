/* In this part we will set all buttons listeners and animations */

function setGallery(showData) {
    var homeBigDataButton = document.getElementById("home_big_data_button");
    var homeBigHomeButton = document.getElementById("home_big_home_button");
    var homeSmallDataButton = document.getElementById("home_small_data_button");
    var homeSmallHomeButton = document.getElementById("home_small_home_button");

    var homeBigGallery = document.getElementById("home_big_gallery");
    var homeSmallGallery = document.getElementById("home_small_gallery");
    var homeBigTable = document.getElementById("home_big_table");
    var homeSmallTable = document.getElementById("home_small_table");
 
    if(showData==1) {
        homeBigDataButton.style.borderBottom = "5px solid var(--color_dark)";
        homeSmallDataButton.style.borderBottom = "5px solid var(--color_dark)";
        homeBigHomeButton.style.borderBottom = "5px solid var(--color_light)"; 
        homeSmallHomeButton.style.borderBottom = "5px solid var(--color_light)";
        
        homeBigGallery.style.display = "none";
        homeSmallGallery.style.display = "none";
        homeBigTable.style.display = "block";
        homeSmallTable.style.display = "block";

 
        homeBigHomeButton.style.fontWeight ="normal";
        homeSmallHomeButton.style.fontWeight ="normal";
        homeBigDataButton.style.fontWeight ="bold";
        homeSmallDataButton.style.fontWeight ="bold";
        return;  
    }

    homeBigDataButton.style.borderBottom = "5px solid var(--color_light)";
    homeSmallDataButton.style.borderBottom = "5px solid var(--color_light)"; 
    homeBigHomeButton.style.borderBottom = "5px solid var(--color_dark)"; 
    homeSmallHomeButton.style.borderBottom = "5px solid var(--color_dark)"; 

    homeBigGallery.style.display = "block";
    homeSmallGallery.style.display = "block";
    homeBigTable.style.display = "none";
    homeSmallTable.style.display = "none";

    homeBigHomeButton.style.fontWeight ="bold";
    homeSmallHomeButton.style.fontWeight ="bold";
    homeBigDataButton.style.fontWeight ="normal";
    homeSmallDataButton.style.fontWeight ="normal";
}

function showNavbarSmall(show) {
    var homeSmallSideNavbar = document.getElementById("home_small_side_navbar");
    var homeSmallCollapseButton = document.getElementById("home_small_collapse_button");
    var homeSmallCollapseButtonCross = document.getElementById("home_small_collapse_button_cross");

    if(show == 1) {
        homeSmallCollapseButton.style.display = 'none'
        homeSmallCollapseButtonCross.style.display = 'block'
        homeSmallSideNavbar.style.animation = "fadeInRigth 1s infinite";
        homeSmallSideNavbar.style.animationIterationCount = "1";
        homeSmallSideNavbar.style.animationFillMode = "forwards";
        homeSmallSideNavbar.style.display = "block";

        return; 
    }

    homeSmallCollapseButton.style.display = 'block'
    homeSmallCollapseButtonCross.style.display = 'none'
    homeSmallSideNavbar.style.animation = "fadeOutLeft 0.7s infinite";
    homeSmallSideNavbar.style.animationIterationCount = "1";
    homeSmallSideNavbar.style.animationFillMode = "forwards";
    homeSmallSideNavbar.style.display = "none";

}

function nightMode(checkbox) {

    if(checkbox.checked == true) {
        document.documentElement.style.setProperty('--color_light', '#0f4c75');
        document.documentElement.style.setProperty('--color_dark', '#3282b8');
        document.documentElement.style.setProperty('--card_normal_text', '#2f6c95');
        document.documentElement.style.setProperty('--white_space', '#1b262c');
        document.documentElement.style.setProperty('--black_space', '#bbe1fa');
        
        if(checkbox.id == 'ch1' || checkbox.id == 'ch2') {toggle2(1);} else {toggle1(1);}
        return;
    }

    document.documentElement.style.setProperty('--color_light', '#E8EFF7');
    document.documentElement.style.setProperty('--color_dark', '#186AA5');
    document.documentElement.style.setProperty('--card_normal_text', '#6EA0C7');
    document.documentElement.style.setProperty('--white_space', 'white');
    document.documentElement.style.setProperty('--black_space', 'black');
    if(checkbox.id == 'ch1' || checkbox.id == 'ch2') {toggle2(0);} else {toggle1(0);}

}

/* Toggle Buttons Function */
function toggle1(state){
    var toggle1 = document.getElementById('nigth_mode_sw1');

    if(state == 0){
        toggle1.innerHTML = "<label id='off1' style='display:block;'class='switch'> \
                                <input id='ch1' type='checkbox' onchange='nightMode(this);'> \
                                <span class='slider round'></span> \
                            </label> \
                            <label  id='on1' style='display: none;' class='switch'> \
                                <input id='ch2' type='checkbox' checked onchange='nightMode(this);'> \
                                <span id='on-span' class='slider round'></span> \
                            </label>";
    } else {
        toggle1.innerHTML = "<label id='off1' style='display:none;'class='switch'> \
                                <input id='ch1' type='checkbox' onchange='nightMode(this);'> \
                                <span class='slider round'></span> \
                            </label> \
                            <label  id='on1' style='display: block;' class='switch'> \
                                <input id='ch2' type='checkbox' checked onchange='nightMode(this);'> \
                                <span id='on-span' class='slider round'></span> \
                            </label>";
    }
}

function toggle2(state){
    var toggle2 = document.getElementById('nigth_mode_sw2');

    if(state == 0){
        toggle2.innerHTML = "<label id='off2' style='display:block;'class='switch'> \
                            <input id='ch3' type='checkbox' onchange='nightMode(this);'> \
                            <span class='slider round'></span> \
                        </label> \
                        <label  id='on2' style='display: none;' class='switch'> \
                            <input id='ch4' type='checkbox' checked onchange='nightMode(this);'> \
                            <span id='on-span' class='slider round'></span> \
                        </label>";
    } else {
        toggle2.innerHTML = "<label id='off2' style='display:none;'class='switch'> \
                            <input id='ch3' type='checkbox' onchange='nightMode(this);'> \
                            <span class='slider round'></span> \
                        </label> \
                        <label  id='on2' style='display: block;' class='switch'> \
                            <input id='ch4' type='checkbox' checked onchange='nightMode(this);'> \
                            <span id='on-span' class='slider round'></span> \
                        </label>";
    }
}