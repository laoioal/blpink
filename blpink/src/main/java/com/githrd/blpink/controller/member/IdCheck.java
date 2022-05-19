package com.githrd.blpink.controller.member;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.githrd.blpink.controller.Blpinter;
import com.githrd.blpink.dao.MemberDao;

public class IdCheck implements Blpinter {

	@Override
	public String exec(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.setAttribute("isRedirect", null);
		
		MemberDao mDao = new MemberDao();
		String id = req.getParameter("id");
		
		int cnt = mDao.getIdCount(id);
		
		StringBuffer buff = new StringBuffer();
		
		buff.append("{");
		buff.append("\"result\" : \"");
		if(cnt == 0) {
			buff.append("OK");
		} else {
			buff.append("NO");
		}
		buff.append("\"");
		buff.append("}");
		
		
		return buff.toString();
	}

}
