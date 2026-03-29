import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @ApiCreatedResponse({ description: 'Order created.', type: CreateOrderDto })
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get()
  @ApiOkResponse({ description: 'List of all orders.', type: [CreateOrderDto] })
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Order details.', type: CreateOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ description: 'Order updated.', type: UpdateOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }

  @Put(':id')
  @ApiOkResponse({ description: 'Order status updated.', type: UpdateOrderDto })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  updateStatus(@Param('id') id: string, @Body('status') newOrderStatus: string) {
    return this.ordersService.update(+id, { status: newOrderStatus } as UpdateOrderDto);
  }

  @Delete(':id')
  @ApiOkResponse({ description: 'Order deleted.' })
  @ApiNotFoundResponse({ description: 'Order not found.' })
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
}
