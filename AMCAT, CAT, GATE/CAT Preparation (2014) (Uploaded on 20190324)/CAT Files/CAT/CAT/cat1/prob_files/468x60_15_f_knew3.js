	function getDayOptions() {
		var s = "";
		for (var i=1; i<=31; i++) {
			s += "<option value=\"" + i + "\">" + i + "</option>";
		}
		return s;
	}	
	function getMonthOptions() {
		var s = "";
		var months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		for (var i=1; i<13; i++) {
			s += "<option value=\"" + months[i] + "\">" + months[i] + "</option>";
		}
		return s;
	}
function submitForm() {
			if (flight_Validation()) {
			var f = document.frmFlights;
			var url = trv_formUrl + "?";
			for(var i=0; i<f.elements.length; i++) {
				url += f.elements[i].name + "=" + escape(f.elements[i].value) + "&";
			}
			window.top.location.href = url;
		}
		return;
	}
	
	function flight_Validation(){
		var s = "";
		var t = document.getElementById('txt1');
		var t2 = document.getElementById('txt2');
		
		with (document.frmFlights) {
			if (t.value == "") {s += "\nYou have not selected a from location.";}
			if (t2.value == "") {s += "\nYou have not selected a to location.";}
			if (dep_dt_mn_1.selectedIndex==-1) {s += "\nYou have not selected a departing month.";}
			if (dep_dt_dy_1.selectedIndex==-1) {s += "\nYou have not selected a departing day.";}				
			if (dep_dt_mn_2.selectedIndex==-1) {s += "\nYou have not selected a return month.";}
			if (dep_dt_dy_2.selectedIndex==-1) {s += "\nYou have not selected a return day.";}			
		}
		if (s.length==0) {
			return true;
		}
		else {
			alert("The form could not be submitted for the following reason(s):\n" + s);
			return false;
		}
	}
	
	function WriteHTML() {
		document.write(
'<table class="trv_Text" width="468" height="60" border="0" cellpadding="0" cellspacing="0">' +
	'<form target="_top" action="' + trv_formUrl + '" name="frmFlights" method="get">' +
'<input type="hidden" name="Service" value="YHOT" /><input type="hidden" name="module" value="tripsrch"><input type="hidden" name="num_count" value="9"><input type="hidden" name="pref_aln" value="all"><input type="hidden" name="cls_svc" value="YR"><input type="hidden" name="pax_cnt" value="1"><input type="hidden" name="chld_pax_cnt" value="0">	' +
  '	<tr><td rowspan="2"><img src="' + trvSection + '" width="75" height="60" alt="Flights" /></td>	' +
      '<td valign="top" bgcolor="#FF9900"><img src="' + trvCopy + '" width="308" height="23" alt="Copy" /></td>	' +
      '<td rowspan="2"><img src="' + trvLogo + '" alt="Logo" width="85" height="60" border="0" /></td>' +
	'</tr><tr><td valign="top" bgcolor="#FF9900"> ' +
			'<table class="trv_Text" width="308" border="0" cellspacing="0" cellpadding="0">' +
            '<tr><td colspan="2" align="center">From:</td>' +
            '<td align="center">To:</td><td>&nbsp;</td>' +
            '<td align="center">Departing:</td><td>&nbsp;</td>' +
            '<td align="center">Returning:</td><td>&nbsp;</td>' +
			'</tr><tr><td colspan="2" align="center">&nbsp;<input class="trv_txtField" id="txt1" type="text" name="dep_arp_cd(1)" size="8" /></td>' +
					'<td align="center">&nbsp;<input class="trv_txtField" id="txt2" type="text" name="arr_arp_cd(1)" size="8" /></td>' +
					'<td>&nbsp;</td>' +
					'<td align="center"><select name="dep_dt_mn_1" class="trv_Date_selectField">');
					document.write(monthOptions);
					document.write('</select>&nbsp;<select name="dep_dt_dy_1" class="trv_Date_selectField">');
					document.write(dayOptions);
					document.write('</select><input type="hidden" name="dep_tm_1" value="10%3A00 AM"><input type="hidden" name="trip_option" value="roundtrp"></td>' +
					'<td>&nbsp;</td>' +
					'<td align="center"><select name="dep_dt_mn_2" class="trv_Date_selectField">');
					document.write(monthOptions);
					document.write('</select>&nbsp;<select name="dep_dt_dy_2" class="trv_Date_selectField">');
					document.write(dayOptions);
					document.write('</select></td>	' +
            '<td><a href="javascript:submitForm();"><img src="' + trvGo + '" alt="Go" width="29" height="20" border="0" /></a></td></tr>' +
			'</table></td></tr><input type="hidden" name="dep_tm_2" value="10:00 AM"></form></table>' );		
	}

