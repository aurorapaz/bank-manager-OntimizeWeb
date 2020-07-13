package com.imatia.jee.bankmanager.client.managers.customers;

import com.imatia.jee.bankmanager.client.utils.BasicInteractionManagerExpanded;
import com.ontimize.annotation.FormComponent;
import com.ontimize.gui.Form;
import com.ontimize.gui.manager.IFormManager;
import com.ontimize.gui.table.Table;

public class IMCustomerTable extends BasicInteractionManagerExpanded {

	@FormComponent(attr = "CustomerService.customer")
	protected Table customerTable; // COGE LA TABLA DEL FORMULARIO

	@Override
	public void registerInteractionManager(Form form, IFormManager formManager) {
		// TODO Auto-generated method stub
		super.registerInteractionManager(form, formManager);
	}

	@Override
	public void setQueryInsertMode() {
		super.setQueryInsertMode();
		if (this.customerTable != null) {
			this.customerTable.setEnabled(true); // LA HABILITA SIEMPRE YA QUE SI NO POR DEFECTO SOLO SE VE EN UPDATE Y
			// QUEREMOS QUE SE MUESTRE EN EL ESTADO INICIAL TAMBIEN
			this.customerTable.refresh();
		}
	}
}