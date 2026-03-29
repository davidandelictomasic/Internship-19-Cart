import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { stat } from 'fs';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({description: 'List of all orders', type: [CreateOrderDto]})
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({description: 'The order has been successfully retrieved.', type: CreateOrderDto})
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }
  @Put(':id')
  @ApiOkResponse({description: 'The order status has been successfully updated.', type: UpdateOrderDto})
  updateStatus(@Param('id') id: string, @Body('status') newOrderStatus: string) {
    return this.ordersService.update(+id, {status: newOrderStatus} as UpdateOrderDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
